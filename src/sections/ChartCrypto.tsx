import {AreaChart, Card, MultiSelect, MultiSelectItem, Select, SelectItem} from "@tremor/react";
import {useCrypto} from "../hooks/useCrypto.tsx";
import {useCoinHistoricalData} from "../api/coins.ts";
import React, {useEffect, useState} from "react";

export const ChartCrypto = () => {
  const { selectedCrypto } = useCrypto();
  const fetchCryptoHistoricalData = useCoinHistoricalData();

  const [chartData, setChartData] = useState([]);
  const [days, setDays] = useState("1");
  const [filters, setFilters] = useState(["Price", "MarketCap", "TotalVolume"]);

  useEffect(() => {
    const fetchChartData = async () => {
      const data = await fetchCryptoHistoricalData(selectedCrypto, days);
      setChartData(data);
    };

    fetchChartData();
  }, [selectedCrypto, days]);

  const dataFormatter = (number: number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (filters.includes(value)) {
      setFilters(filters.filter(filter => filter !== value));
    } else {
      setFilters([...filters, value]);
    }
  }

  return (
    <Card className="mt-8">
      <h1 className="text-4xl font-semibold text-dark dark:text-white">Price Chart</h1>
      <p className="text-gray-500 mt-1">Historical Price Data</p>
      <div className="flex flex-col md:flex-row justify-end items-center gap-4 mb-4 mt-4">
        <Select className="w-44" id="timeframe" name="timeframe" value={days} onValueChange={setDays}>
          <SelectItem value="1">1 Day</SelectItem>
          <SelectItem value="7">1 Week</SelectItem>
          <SelectItem value="30">1 Month</SelectItem>
        </Select>
        <div>
          <MultiSelect value={filters} onValueChange={setFilters}>
            <MultiSelectItem value={"Price"} onChange={() => handleFilterChange}>Price</MultiSelectItem>
            <MultiSelectItem value={"MarketCap"} onChange={() => handleFilterChange}>Market Cap</MultiSelectItem>
            <MultiSelectItem value={"TotalVolume"} onChange={() => handleFilterChange}>Total Volume</MultiSelectItem>
          </MultiSelect>
        </div>
      </div>
      <AreaChart
        className="h-80"
        data={chartData}
        index="date"
        categories={filters}
        colors={['indigo', 'green', 'blue']}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
        onValueChange={(v) => console.log(v)}
      />
    </Card>
  );
};