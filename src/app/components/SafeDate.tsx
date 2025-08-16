'use client';
import { useEffect, useState } from 'react';

interface SafeDateProps {
  dateString: string;
  format?: 'short' | 'long' | 'custom';
  className?: string;
}

const SafeDate: React.FC<SafeDateProps> = ({ 
  dateString, 
  format = 'short', 
  className = '' 
}) => {
  const [formattedDate, setFormattedDate] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    try {
      const date = new Date(dateString);
      
      if (isNaN(date.getTime())) {
        setFormattedDate('Invalid Date');
        return;
      }
      
      // Use consistent formatting that works on both server and client
      if (format === 'custom') {
        // Always use DD/MM/YYYY format with leading zeros
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        setFormattedDate(`${day}/${month}/${year}`);
      } else if (format === 'long') {
        setFormattedDate(date.toLocaleDateString('en-GB', { 
          year: 'numeric', 
          month: 'long', 
          day: '2-digit'
        }));
      } else {
        // Use consistent locale and format
        setFormattedDate(date.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric'
        }));
      }
    } catch (error) {
      console.error('Date formatting error:', error);
      setFormattedDate('Invalid Date');
    }
  }, [dateString, format]);

  // Render placeholder until mounted to prevent hydration mismatch
  if (!isMounted) {
    return <span className={className}>--/--/----</span>;
  }

  return <span className={className}>{formattedDate}</span>;
};

export default SafeDate;
