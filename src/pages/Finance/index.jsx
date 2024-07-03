import React, { useState } from 'react';
import { GeneralLayout } from '../../layouts'; // Import your layout component

function FinancePage() {
  const [queries, setQueries] = useState([
    { id: 1, user: 'John Doe', query: 'What are the available payment methods?', answer: '' },
    { id: 2, user: 'Jane Smith', query: 'How can I view my transaction history?', answer: '' },
    { id: 3, user: 'Jim Brown', query: 'What are the charges for international transactions?', answer: '' },
  ]);

  const [replyText, setReplyText] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(null);

  const handleReply = () => {
    if (!selectedQuery) return;
    const updatedQueries = queries.map(query =>
      query.id === selectedQuery.id ? { ...query, answer: replyText } : query
    );
    setQueries(updatedQueries);
    setReplyText('');
    setSelectedQuery(null);
  };

  return (
    <GeneralLayout>
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Finance Queries</h1>

        {/* List of Queries */}
        <ul className="divide-y divide-gray-200">
          {queries.map(query => (
            <li key={query.id} className="py-4">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <p className="text-lg font-semibold">{query.user}</p>
                  <p className="text-gray-600">{query.query}</p>
                </div>
                {query.answer ? (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-md">
                    <p className="font-semibold">Admin:</p>
                    <p>{query.answer}</p>
                  </div>
                ) : (
                  <button
                    onClick={() => setSelectedQuery(query)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Reply
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Reply Modal */}
        {selectedQuery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg w-1/2">
              <h2 className="text-xl font-bold mb-4">Reply to Query</h2>
              <p className="mb-4">{selectedQuery.query}</p>
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="border-gray-300 border rounded-md p-2 w-full h-32"
                placeholder="Type your reply here..."
              ></textarea>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleReply}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Send
                </button>
                <button
                  onClick={() => setSelectedQuery(null)}
                  className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </GeneralLayout>
  );
}

export default FinancePage;
