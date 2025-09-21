import { Student, Board, WorkStatus, WorkPriority, DoubtStatus, DoubtPriority, DoubtOrigin } from './types';

export const initialStudents: Student[] = [
    { id: '1', name: 'Rohan Sharma', grade: '10', board: 'CBSE', school: 'Delhi Public School', batch: 'A', timeSlot: '3:00–4:30', personalPhone: '9876543210', isArchived: false, avatarUrl: 'https://i.pravatar.cc/150?u=a1' },
    { id: '2', name: 'Priya Patel', grade: '9', board: 'ICSE', school: 'St. Xavier\'s', batch: 'B', timeSlot: '4:30–6:00', fatherPhone: '9876543211', isArchived: false, avatarUrl: 'https://i.pravatar.cc/150?u=b2' },
    { id: '3', name: 'Amit Singh', grade: '11', board: 'Cambridge', programStage: 'AS Level (A1)', school: 'Global International', batch: 'C', timeSlot: '6:00–8:00', motherPhone: '9876543212', isArchived: false, avatarUrl: 'https://i.pravatar.cc/150?u=c3' },
    { id: '4', name: 'Sneha Reddy', grade: '12', board: 'IB', programStage: 'DP', school: 'Oakridge International', batch: 'A', timeSlot: '3:00–4:30', isArchived: true, avatarUrl: null },
    { id: '5', name: 'Vikram Mehta', grade: '8', board: 'GSEB', school: 'Gujarat Public School', batch: 'B', timeSlot: '4:30–6:00', fatherPhone: '9876543214', isArchived: false, avatarUrl: 'https://i.pravatar.cc/150?u=d4' }
];

export const BOARDS: Board[] = ['CBSE', 'ICSE', 'GSEB', 'Cambridge', 'IB'];
export const GRADES: string[] = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
export const BATCHES: string[] = ['A', 'B', 'C'];
export const TIME_SLOTS: string[] = ['3:00–4:30', '4:30–6:00', '6:00–8:00'];
export const WORK_STATUSES: readonly WorkStatus[] = ['Assign', 'Pending', 'Completed'];
export const WORK_PRIORITIES: readonly WorkPriority[] = ['Low', 'Medium', 'High'];
export const DOUBT_STATUSES: readonly DoubtStatus[] = ['Open', 'Resolved', 'Tasked'];
export const DOUBT_PRIORITIES: readonly DoubtPriority[] = ['Low', 'Medium', 'High'];
export const DOUBT_ORIGINS: readonly DoubtOrigin[] = ['During Reading', 'During Work Task', 'During Notes', 'Before Test', 'After Test', 'Other'];


// For StudentCard on Directory page
export const STUDENT_CARD_BANNER_COLORS: Record<Board, string> = {
    CBSE: 'bg-pastel-orange',
    ICSE: 'bg-pastel-green',
    GSEB: 'bg-pastel-gray',
    Cambridge: 'bg-pastel-blue',
    IB: 'bg-pastel-pink',
};

// For StudentSubjectCard on Subject Manager page
export const SUBJECT_CARD_STYLES: Record<Board, { bg: string; border: string }> = {
    CBSE: { bg: 'bg-pastel-orange', border: 'border-border-orange' },
    ICSE: { bg: 'bg-pastel-green', border: 'border-border-green' },
    GSEB: { bg: 'bg-pastel-gray', border: 'border-border-gray' },
    Cambridge: { bg: 'bg-pastel-blue', border: 'border-border-blue' },
    IB: { bg: 'bg-pastel-pink', border: 'border-border-pink' },
};

// Default Subject + Chapter data for each student
export const initialSubjects = {
  '1': {
    studentId: '1',
    subjects: [
      {
        subject: 'Mathematics',
        chapters: [
          { no: '1', name: 'Real Numbers' },
          { no: '2', name: 'Polynomials' }
        ]
      },
      {
        subject: 'Science',
        chapters: [
          { no: '1', name: 'Chemical Reactions' },
          { no: '2', name: 'Acids & Bases' }
        ]
      }
    ]
  },
  '2': {
    studentId: '2',
    subjects: [
      {
        subject: 'English',
        chapters: [
          { no: '1', name: 'Merchant of Venice' },
          { no: '2', name: 'Grammar Practice' }
        ]
      }
    ]
  },
  '3': {
    studentId: '3',
    subjects: [
      {
        subject: 'Physics',
        chapters: [
          { no: '1', name: 'Measurements' },
          { no: '2', name: 'Motion in 1D' }
        ]
      }
    ]
  }
};