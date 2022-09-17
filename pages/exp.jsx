import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function exp() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3">Project Experience</p>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="/scratch.png"
                class="img-fluid rounded-start"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Scratch Project</h5>
                <p class="card-text text-muted">
                  I used scratch for my first project on first semestry. It made
                  me learn programming principles even more.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="text-bg-light card mb-3 shadow d-flex justify-content-center mx-auto"
          style={{ maxWidth: "675px" }}
        >
          <div class="row g-0">
            <div class="col-md-8">
              <div class="card-body text-bg-light">
                <h5 class="card-title">Qt Project</h5>
                <p class="card-text text-muted">
                  It's a second semester project. It is a project that uses the
                  Qt creator in this project. Which is a program that I learned
                  by myself.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <img
                src="/qt.png"
                class="img-fluid rounded-end"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
