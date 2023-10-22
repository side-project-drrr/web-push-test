import axios from "axios";

const token = `eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJURUFNLVNBSURBLUJFIiwic3ViIjoiNTI0IiwiaWQiOjUyNCwiZXhwIjoxNjk4NTU0OTc0LCJpYXQiOjE2OTc5NTAxNzR9.jHhtp3qQCaNwLR-H72eUzYJnrXwBBTeRHJZdZFT_viT_GRclPYyFMH4h1pIU41IWEskX0JSY2hqD6cyf64iKc1u8V761Kj9FyIBfwMK-1pKLuGV2tjaWcviW5_euRahSO5uDYwiNMk6lovsIkwl8TdDryrhX-6lrHmx9YkRBbwTqYTZqRYjd8V7_p2tFGZXy6UJj444EpEjFkWHbu6_J_v7kq_NcVy44DAByPjId63LRnY08J0Tu2kcl6m_UO5X3rV3CEMs5ezcm_3wVdr1EA8RAkHIXUhC7W96ahFwPqGCzyafXsIsWvCPXYhjI5aboIQWhesHuVuBvY0DRzcitgA`;

export const pushService = (subscription) => {
  const jsonString = subscription.toJSON();
  const res = axios.post(
    `http://localhost:8081/api/subscription`,
    {
      endpont: `${jsonString.endpoint}`,
      expirationTime: `${jsonString.expirationTime}`,
      p256dh: `${jsonString.keys.p256dh}`,
      auth: `${jsonString.keys.auth}`,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;
  return data;
};

export const pushDeleteService = () => {
  const id = 1;
  const res = axios.delete(`http://localhost:8081/api/subscription/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;
  return data;
};
