// src/components/AddTripForm.tsx
import React, { useState, useRef, useEffect } from "react";

interface AutocompleteProps {
  label: string;
  value: string;
  setValue: (val: string) => void;
  options: string[];
  setOptions: (opts: string[]) => void;
  placeholder?: string;
}

function AutocompleteInput({
  label,
  value,
  setValue,
  options,
  setOptions,
  placeholder,
}: AutocompleteProps) {
  // State for the filtered suggestions
  const [suggestions, setSuggestions] = useState<string[]>([]);
  // Whether the dropdown is open
  const [isOpen, setIsOpen] = useState(false);
  // Ref to detect outside clicks
  const containerRef = useRef<HTMLDivElement>(null);

  // Whenever the input value or options change, recalc suggestions
  useEffect(() => {
    if (value.trim() === "") {
      // If the input is empty, show all options
      setSuggestions(options);
    } else {
      // Otherwise, filter options based on substring match (case-insensitive)
      const filtered = options.filter((opt) =>
        opt.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    }
  }, [value, options]);

  // Close the suggestions menu if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // When the user selects an existing option
  const handleSelect = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  // If no option matches, allow them to “add” a new one
  const handleAddNew = () => {
    const trimmed = value.trim();
    if (trimmed === "") return;
    setOptions([...options, trimmed]);
    setValue(trimmed);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setIsOpen(true);
        }}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
      />

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
          {suggestions.length > 0 ? (
            // Show filtered suggestions
            suggestions.map((opt, idx) => (
              <div
                key={idx}
                onMouseDown={() => handleSelect(opt)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {opt}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500 italic">No matches</div>
          )}

          {/* If input is non-empty and not already in options, show “Add new” */}
          {!options
            .map((opt) => opt.toLowerCase())
            .includes(value.trim().toLowerCase()) &&
            value.trim() !== "" && (
              <div
                onMouseDown={handleAddNew}
                className="px-4 py-2 text-accent font-medium hover:bg-gray-100 cursor-pointer"
              >
                Add new “{value.trim()}”
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default function AddTripForm() {
  // Form state
  const [truckNumber, setTruckNumber] = useState("");
  const [startLocation, setStartLocation] = useState("");
  const [endLocation, setEndLocation] = useState("");
  const [driverName, setDriverName] = useState("");
  const [clientName, setClientName] = useState("");
  // Default date to today
  const [tripDate, setTripDate] = useState(() => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  });
  const [expenses, setExpenses] = useState("");
  const [miscExpenses, setMiscExpenses] = useState("");

  // Initial “existing” arrays (you’ll fetch real data from your backend later)
  const [truckOptions, setTruckOptions] = useState<string[]>([
    "TRK-1001",
    "TRK-1002",
    "TRK-1003",
  ]);
  const [locationOptions, setLocationOptions] = useState<string[]>([
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
  ]);
  const [driverOptions, setDriverOptions] = useState<string[]>([
    "John Doe",
    "Jane Smith",
    "Ravi Kumar",
  ]);
  const [clientOptions, setClientOptions] = useState<string[]>([
    "Acme Corp",
    "LogiTrans",
    "QuickDeliver",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace this with your actual backend / Firestore / Supabase call
    alert(
      `New Trip Details:\n` +
        `Truck Number: ${truckNumber}\n` +
        `Date: ${tripDate}\n` +
        `Start Location: ${startLocation}\n` +
        `End Location: ${endLocation}\n` +
        `Driver: ${driverName}\n` +
        `Client: ${clientName}\n` +
        `Expenses: ₹${expenses}\n` +
        `Miscellaneous: ₹${miscExpenses}`
    );
    // Clear form fields
    setTruckNumber("");
    setStartLocation("");
    setEndLocation("");
    setDriverName("");
    setClientName("");
    setTripDate(new Date().toISOString().split("T")[0]);
    setExpenses("");
    setMiscExpenses("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-4 flex items-center text-primary">
        <span className="mr-2">➕</span> Add New Trip
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Truck Number */}
        <AutocompleteInput
          label="Truck Number"
          value={truckNumber}
          setValue={setTruckNumber}
          options={truckOptions}
          setOptions={setTruckOptions}
          placeholder="Select or type truck number"
        />

        {/* Date (defaults to today, but can be changed) */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Date</label>
          <input
            type="date"
            value={tripDate}
            onChange={(e) => setTripDate(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            required
          />
        </div>

        {/* Start Location */}
        <AutocompleteInput
          label="Start Location"
          value={startLocation}
          setValue={setStartLocation}
          options={locationOptions}
          setOptions={setLocationOptions}
          placeholder="City or Landmark"
        />

        {/* End Location */}
        <AutocompleteInput
          label="End Location"
          value={endLocation}
          setValue={setEndLocation}
          options={locationOptions}
          setOptions={setLocationOptions}
          placeholder="City or Landmark"
        />

        {/* Driver Name */}
        <AutocompleteInput
          label="Driver Name"
          value={driverName}
          setValue={setDriverName}
          options={driverOptions}
          setOptions={setDriverOptions}
          placeholder="Select or type driver"
        />

        {/* Client Name */}
        <AutocompleteInput
          label="Client Name"
          value={clientName}
          setValue={setClientName}
          options={clientOptions}
          setOptions={setClientOptions}
          placeholder="Select or type client"
        />

        {/* Expenditures */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Expenditures (Total ₹)
          </label>
          <input
            type="number"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            placeholder="0.00"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            required
            min="0"
            step="0.01"
          />
        </div>

        {/* Miscellaneous Expenses */}
        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700">
            Miscellaneous Expenses (₹)
          </label>
          <input
            type="number"
            value={miscExpenses}
            onChange={(e) => setMiscExpenses(e.target.value)}
            placeholder="0.00"
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            min="0"
            step="0.01"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-accent hover:bg-accent-dark text-white rounded-md shadow"
        >
          Save Trip
        </button>
      </div>
    </form>
  );
}
