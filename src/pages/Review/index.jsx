import React, { useMemo, useState } from 'react';
import { GeneralLayout } from '../../layouts';
import { useTable, useGlobalFilter, usePagination, useSortBy } from 'react-table'; // Import useGlobalFilter, usePagination, and useSortBy hooks

function ReviewIndex() {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const data = useMemo(
    () => [
      { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User' },
      { id: 3, name: 'Jim Brown', email: 'jim.brown@example.com', role: 'Guest' },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { Header: 'ID', accessor: 'id', sortType: 'basic' }, // Enable basic sorting for ID column
      { Header: 'Name', accessor: 'name', sortType: 'alphanumeric' }, // Enable alphanumeric sorting for Name column
      { Header: 'Email', accessor: 'email', sortType: 'alphanumeric' }, // Enable alphanumeric sorting for Email column
      { Header: 'Role', accessor: 'role', sortType: 'alphanumeric' }, // Enable alphanumeric sorting for Role column
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <>
            <button onClick={() => handleEdit(row.original)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Edit
            </button>
            <button onClick={() => handleDelete(row.original)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Delete
            </button>
          </>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Rows for the current page
    prepareRow,
    state,
    setGlobalFilter, // Global filter function
  } = useTable(
    { columns, data },
    useGlobalFilter, // Apply global filter hook
    useSortBy, // Apply sorting hook
    usePagination // Apply pagination hook
  );

  const { globalFilter } = state; // Extract globalFilter from state

  const handleEdit = (row) => {
    // Implement edit logic
    console.log('Editing:', row);
  };

  const handleDelete = (row) => {
    // Implement delete logic
    console.log('Deleting:', row);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <GeneralLayout>
      <div className="border rounded-lg bg-white p-6 w-5/6 mx-auto mt-3">
        <h1 className="font-outfit text-xl font-bold border-b-2 border-blue-300 inline-block mb-5">
          Review List
        </h1>

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            value={globalFilter || ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="Search..."
            className="border-gray-300 w-1/2 border rounded-md p-2 w-full"
          />
          <button
            onClick={openModal}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Review
          </button>
        </div>

        {/* Table */}
        <table {...getTableProps()} className="table-auto w-full border-collapse border">
          <thead className="bg-gray-100">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())} // Enable sorting on header click
                    className="px-4 py-2 text-left font-bold text-gray-700 border-b cursor-pointer"
                  >
                    {column.render('Header')}
                    {/* Display sort icon */}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽' // Descending sort icon
                          : ' 🔼' // Ascending sort icon
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="bg-white">
            {page.map((row, rowIndex) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className={rowIndex % 2 === 0 ? 'bg-gray-100' : ''}
                >
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 text-sm text-gray-800 border-b"
                    >
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="pagination mt-4 flex items-center justify-center">
          {/* Pagination buttons */}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Add New Review</h2>
            {/* Add your form or content for the modal */}
            <button
              onClick={closeModal}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </GeneralLayout>
  );
}

export default ReviewIndex;
