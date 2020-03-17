
  <div class="row">
    <div class="col-lg-4" id="upload_card">
        <div class="card shadow mt-1 bg-primary" >
            <div class="card-body">
                <div class="row">
                    <h5 class="card-title text-white mt-2">บันทึกเหตุการณ์กระแสไฟฟ้าขัดข้อง</h5>
                </div>
                <div class="row">
                <input type="text" class="form-control mt-1" id="place" name="event_input" placeholder="สถานที่">
                <input type="text" class="form-control mt-1" id="moo" name="event_input" placeholder="หมู่ที่">
                <input type="text" class="form-control mt-1" id="tumbol" name="event_input" placeholder="ตำบล">
                <input type="text" class="form-control mt-1" id="aumper" name="event_input" placeholder="อำเภอ">
                <input type="text" class="form-control mt-1" id="province" name="event_input" placeholder="จังหวัด">
                <input type="text" class="form-control mt-1" id="cause" name="event_input" placeholder="สาเหตุ">
                <input type="text" class="form-control mt-1" id="cus_name" name="event_input" placeholder="ผู้แจ้ง">
                </div>

            </div>
            <div class="card-footer">
                <div class="float-right">
                    <button class="btn btn-success"  id="save_btn" onclick="creat_event()">
                        <i class="fas fa-save" aria-hidden="true"></i>
                        บันทึก
                    </button>
                </div>
            </div>
        </div>
    </div>

  <div class="col-lg-8" id="card_event_area">
      <!-- <div class="card shadow mt-1">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-8">
            <h5><span class="text-white">oooooo</span></h5>
            </div>
            <div class="col-lg-4">
              <div class="btn-group float-right" role="group">
                <div class="btn-group dropleft">
                  <button id="change_status" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    เปลี่ยนสถานะ
                  </button>
                  <div class="dropdown-menu" aria-labelledby="change_status">
                    <a class="dropdown-item" href="#">รอดำเนินการ</a>
                    <a class="dropdown-item" href="#">กำลังดำเนินการ</a>
                    <a class="dropdown-item" href="#">เสร็จงาน</a>
                  </div>
                </div>
                <div class="btn-group dropleft">
                  <button id="tech" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ส่งงานให้ช่าง
                  </button>
                  <div class="dropdown-menu" aria-labelledby="tech">
                    <a class="dropdown-item" href="#">นายนัทธพงศ์ เจริญกิจพิเชียร</a>
                    <a class="dropdown-item" href="#">นายปรัชญาจีนขาวขำ</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</div>






