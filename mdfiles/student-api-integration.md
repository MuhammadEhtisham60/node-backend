# Student API Integration Guide

This document provides details for integrating the updated Student Admission API.

## Base URL
`http://localhost:5000` (Local) or your production API URL.

## Create Student (Admission)
Endpoint for submitting the 7-step admission form.

- **URL:** `/api/students`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Payload
The API now accepts a comprehensive JSON object matching the multi-step form structure.

```json
{
  "name": "Ali Khan",
  "fatherName": "Ahmed Khan",
  "rollNo": "STU-2024-001",
  "dob": "2015-05-20",
  "gender": "Male",
  "cnic": "12345-1234567-1",
  "profilePhoto": "base64_or_url",
  
  "class": "5",
  "section": "A",
  "prevSchool": "City Public School",
  "lastResult": "85",
  "admissionDate": "2024-05-01",
  
  "mobile": "0300-1234567",
  "altContact": "0321-7654321",
  "email": "ali@example.com",
  "city": "Faisalabad",
  "address": "House 123, Street 4, Gulberg",
  
  "fatherFullName": "Ahmed Khan",
  "fatherCNIC": "12345-0000000-1",
  "occupation": "Engineer",
  "fatherPhone": "0300-1111111",
  "motherName": "Saima Bibi",
  "motherPhone": "0300-2222222",
  
  "blood": "B+",
  "emergency": "0300-3333333",
  "medical": "None",
  "disability": "None",
  
  "transport": true,
  "busRoute": "Route A — North",
  "hostel": false,
  
  "documents": [
    {
      "title": "B-Form Copy",
      "url": "uploads/bform.pdf"
    }
  ]
}
```

### Success Response
- **Status:** `201 Created`
- **Body:** The created student object with generated `id` and `timestamps`.

---

## Frontend Integration (TypeScript)

### 1. Update Service Interface
Ensure your `Student` interface matches the backend schema.

```typescript
export interface Student {
  id: string;
  name: string;
  fatherName?: string;
  rollNo?: string;
  dob?: string;
  gender?: string;
  cnic?: string;
  profilePhoto?: string;
  
  class?: string;
  section?: string;
  prevSchool?: string;
  lastResult?: string;
  admissionDate?: string;
  
  mobile?: string;
  altContact?: string;
  email?: string;
  city?: string;
  address?: string;
  
  fatherFullName?: string;
  fatherCNIC?: string;
  occupation?: string;
  fatherPhone?: string;
  motherName?: string;
  motherPhone?: string;
  
  blood?: string;
  emergency?: string;
  medical?: string;
  disability?: string;
  
  transport?: boolean;
  busRoute?: string;
  hostel?: boolean;
  
  documents?: {
    title: string;
    url: string;
  }[];

  status: string;
  feeStatus: string;
}
```

### 2. Implementation in Component
When submitting the form, simply pass the `data` object collected from all steps.

```tsx
const submit = () => {
  const payload = {
    ...formData,
    name: formData.fullName, // Ensure 'name' is mapped correctly
    status: "Active",
    feeStatus: "Pending"
  };
  
  createMutation.mutate(payload);
};
```
