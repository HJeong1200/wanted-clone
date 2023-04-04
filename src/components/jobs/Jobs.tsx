import Job from "../../types/Job";
import Card from "../Card";

const Jobs = () => {
  const jobs: Job[] = [];

  return (
    <main className="jobs-container">
      {jobs.map((el) => {
        const prize = el.prize.applicant + el.prize.referrer;
        return (
          <Card
            image={el.company.images[0]}
            title={el.title}
            subtitle1={el.company.name}
            subtitle2={el.location}
            subtitle3={`채용보상금 ${prize.toLocaleString("ko-KR")}원`}
          />
        );
      })}
    </main>
  );
};

export default Jobs;
