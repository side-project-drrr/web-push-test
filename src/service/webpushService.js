import axios from "axios";

const token = `eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJEUlJSLUJFIiwic3ViIjoiNTAxIiwiaWQiOjUwMSwiZXhwIjoxNzA2NDkxMDg5LCJpYXQiOjE3MDU4ODYyODl9.m4zv3hTvaWA-VbXPsp02fK6frZ4XgVAN8M8xSV28qQrH1X0Xq4Z2KXaLT5IG-TUqjRgcyMf1cWfKrrT56zhEORynIHPURjWnyijlaQyYfLXcaafT8pLKpajzNpmfaenEoYcuRH_SNXuX3OrRQ0xflbjZvQKR6abU862ifIwQetSSRE1YByabvDpiyt2Ug2UzdSsxgIixBMd3FYYE2FrfBAyhx_ZkyDAA-9Gh0Watk75TS_oFVmenhQzFSeibMbdlwixYhtDInCXmQ6SfJTL250csgZAWsXrlv1Xq4BM7GYzFOzj7-8DY4zKbXys_jpqhdgeBpCf66pDD3hTjKl2tQQ`;

export const pushService = (subscription) => {
  const jsonString = subscription.toJSON();
  const res = axios.post(
    `http://localhost:8081/api/v1/member/subscription`,
    {
      endpoint: `${jsonString.endpoint}`,
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
