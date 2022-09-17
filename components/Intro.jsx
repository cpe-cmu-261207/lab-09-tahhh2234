import React from "react";

export default function intro() {
  return (
    <div className="mx-auto" style={{ maxWidth: "800px" }}>
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
        <div>
          <p className="display-5 mb-3 ">Thadpong Sermsook</p>
          <p className="text-muted">
            Hello! My name is Thadpong Sermsook. You can call me Cheetah. I
            graduated from high school at Bunyawatwittayalai school.
          </p>
        </div>
      </div>
    </div>
  );
}
