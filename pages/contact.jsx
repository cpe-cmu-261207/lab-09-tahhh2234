import React from "react";
import Mainlayout from "../layout/Mainlayout";

export default function contact() {
  return (
    <div>
      <Mainlayout>
        <p class="text-center fs-3">My Contact</p>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          <div className="d-flex justify-content-center gap-3">
            <div>
              <img
                src="/ct.jpg"
                class="rounded-circle"
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
            <div class="vstack gap-2">
              <div class="d-flex ">
                <div class="fw-semibold" style={{ minWidth: "100px" }}>
                  Name
                </div>
                <span class="text-muted">Thadpong Sermsook</span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "76px" }}>
                  Nickname
                </div>
                <span class="text-muted">Cheetah</span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "75px" }}>
                  Address
                </div>
                <span class="text-muted">389 Lampang Thailand 52100</span>
              </div>
              <div class="d-flex gap-4">
                <div class="fw-semibold" style={{ minWidth: "75px" }}>
                  Facebook
                </div>
                <span class="text-muted">
                  <a
                    href="https://www.facebook.com/cheetah.thadpong/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/cheetah.thadpong/
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="fw-semibold" style={{ minWidth: "50px" }}>
                  Email
                </div>
                <span class="text-muted">
                  <a href="mailto: charnchol_pa@cmu.ac.th">
                    tadphong_s@cmu.ac.th
                  </a>
                </span>
              </div>
              <div class="d-flex gap-5">
                <div class="fw-semibold" style={{ minWidth: "50px" }}>
                  Phone
                </div>
                <span class="text-muted">0987488483</span>
              </div>
            </div>
          </div>
        </div>
      </Mainlayout>
    </div>
  );
}
