import React from "react";

export default function Skill() {
  return (
    <div>
      <div class=" mx-auto m-3 d-flex justify-content-center fs-3">
        My skills
      </div>
      <div class="hstack mx-auto justify-content-center">
        <div
          class="text-bg-light card mb-3 mx-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/program.jpg"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Programming</h5>
                <p class="card-text text-muted">
                  I started programming a year ago because I felt it was right
                  for me because it necessitates a lot of principles and
                  thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-bg-light card mb-3 shadow"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/badminton.jpg"
                class="img-fluid rounded-start"
                style={{ objectfit: "cover", width: "100%", height: "140px" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Badminton</h5>
                <p class="card-text text-muted">
                  In high school, I played badminton with my friends. My
                  favorite sport is it because it is a full-body exercise and I
                  play it well, too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
