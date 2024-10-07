import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

const Pricing = () => {
  return (
    <>
      <SectionHeading title="Pricing" />

      <div className="w-full p-3 bg-gray-100">
        <h3 className="text-white max-w-5xl mx-auto py-3 font-semibold text-xl text-center bg-blue-500">
          PACKAGES
        </h3>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 bg-gray-100">
        <table className="w-full max-w-5xl mx-auto text-sm text-left rtl:text-right rounded-md text-gray-500 dark:text-gray-400 border border-gray-200 border-collapse bg-yellow-100">
          <thead className="text-lg text-gray-700 whitespace-nowrap sm:whitespace-normal">
            <tr>
              <th className="px-6 py-3 w-72 bg-blue-800 text-white text-center">
                SERVICE ITEMS
              </th>
              <th className="px-6 py-3 bg-bronze text-center">BRONZE</th>
              <th className="px-6 py-3 bg-copper text-center">COPPER</th>
              <th className="px-6 py-3 bg-silver text-center">SILVER</th>
              <th className="px-6 py-3 bg-gold text-center">GOLD</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <th scope="row" className="font-medium text-gray-900 text-center">
                Close Speed (How soon you'll get financial statements after
                period ends)
              </th>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr className="">
              <th scope="row" className="font-medium text-gray-900 text-center">
                Financial Statements delivered (P&L and Balance Sheet)
              </th>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Business tax return preparation
              </th>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr className="">
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Monthly Accounting
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Q&A - Meeting
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Client schedules when tax return will be worked on and completed
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Payroll
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                1099 Preparation
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Legal entity setup and maintenance
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Tax planning
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                1040 Tax preparation (up to four partners)
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Client decides if extension is filed
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Business License renewal, Sales tax, Payroll tax report, FTB
                Payments, SOI renewals, BOI compliance, etc
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Loan applications and Ad hoc
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="font-medium text-gray-900 dark:text-white text-center"
              >
                Bill Pay
              </th>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="red"
                    stroke-width="8"
                    fill="none"
                  />
                  <line
                    x1="30"
                    y1="30"
                    x2="70"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                  <line
                    x1="70"
                    y1="30"
                    x2="30"
                    y2="70"
                    stroke="red"
                    stroke-width="8"
                  />
                </svg>
              </td>
              <td className="">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="6"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                  <path
                    d="M9 12.5l2 2 4-4"
                    stroke="green"
                    stroke-width="1"
                    fill="none"
                  />
                </svg>
              </td>
            </tr>

            <tr className="text-gray-900">
              <td className="bg-blue-800 text-white text-center text-sm">
                PRICE
              </td>
              <td className="bg-bronze text-center text-sm">$250/HR</td>
              <td className="bg-copper text-center text-sm">$1000/PER MONTH</td>
              <td className="bg-silver text-center text-sm">$3000/PER MONTH</td>
              <td className="bg-gold text-center text-sm">$5000/PER MONTH</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto p-4">
        <h3 className="text-blue-500 text-5xl text-center my-5">
          Ready to give your Real Estate Investment game a boost?
        </h3>
        <Link
          href="/call"
          className="inline-flex w-full sm:w-72 mx-auto justify-center items-center py-3 px-5 text-base font-semibold text-center text-white rounded-lg mb-4 bg-blue-500 hover:bg-blue-600 hover:text-gray-100"
        >
          Book a Call
        </Link>
      </div>
    </>
  );
};

export default Pricing;
