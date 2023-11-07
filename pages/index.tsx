import React, { useState, useEffect } from 'react';

export default function Home() {
  const [question, setQuestion] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string; timestamp: string }[]>([]);

  useEffect(() => {
    // Saat komponen dimuat, coba memuat data dari localStorage
    const savedQuestions = JSON.parse(localStorage.getItem('questions') || '[]');
    setMessages(savedQuestions);
  }, []); // Gunakan array kosong untuk memastikan efek ini hanya dijalankan sekali saat komponen dimuat

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  };

  const handleSendClick = () => {
    if (question) {
      // Menambahkan pertanyaan ke daftar pesan dengan timestamp
      const newMessage = { text: question, timestamp: new Date().toLocaleString() };
      const newMessages = [...messages, newMessage];
      setMessages(newMessages);

      // Simpan data di localStorage
      localStorage.setItem('questions', JSON.stringify(newMessages));

      // Mereset input pertanyaan
      setQuestion('');
    }
  };

  return (
    <main>
      <div className='flex-col lg:flex justify-around text-white'>
        Hello from up dot ikhsannh dot com

        <div className="flex flex-col text-center items-center">
          <label>Question</label>
          <input
            className="mt-[1rem] w-[20rem] h-[5rem] text-center text-black"
            placeholder="write question here..."
            value={question}
            onChange={handleInputChange}
          />
          <button onClick={handleSendClick}>Send</button>
        </div>

        {/* Menampilkan daftar pesan dalam kartu (card) terpusat */}
        <div>
          {messages.map((message, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
                <p>{message.text}</p>
                <p>Created at: {message.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
