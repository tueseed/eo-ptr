<div class="row">
  <div class="col-lg-3">
    <h6 class="card-title text-success mt-2">รายงานสถานการณ์ล่าสุด</h6>
  </div>
  <div class="col-lg-9">
<div class="row" id="data_area">
  <div class="col-lg-3">
    <div class="card shadow bg-primary" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h6 class="card-title text-white mt-2">เหตุการณ์ทั้งหมด</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:25px;"><span id="all_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow bg-success" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h6 class="card-title text-white mt-2">จ่ายไฟแล้ว</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:25px;"><span id="finnish_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow bg-warning" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h6 class="card-title text-white mt-2">กำลังดำเนินการ</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:25px;"><span id="inprocess_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow bg-info" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h6 class="card-title text-white mt-2">ส่งงานให้ช่าง</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:25px;"><span id="sending_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3 mt-2">
    <div class="card shadow bg-danger" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h6 class="card-title text-white mt-2">รอดำเนินการ</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:25px;"><span id="pending_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="row mt-3">
  <div class="col-lg-12">
    <span class="text-success">พนักงานช่างทำหน้าที่แก้กระแสไฟฟ้าขัดข้อง</span>
  </div>
</div>

<div class="row mt-2" id="tech_card">

</div>

<div class="row mt-4">
  <div class="col-lg-12">
      <div class="card shadow" >
        <div class="card-body">
        <table 
        id="event_tbl"
        data-toggle="table"  
        data-fixed-columns="true"
        data-sticky-header="true"
        data-search="true">
        <thead>
          <tr>
            <th data-align="center" data-field="place" >สถานที่</th>
            <th data-align="center" data-field="addr" >ที่อยู่</th>
            <th data-align="center" data-field="cause">สาเหตุ</th>
            <th data-align="center" data-field="cus_name" > ผู้แจ้ง</th>
            <th data-align="center" data-field="status">สถานะ</th>
          </tr>
        </thead>
      </table>
        </div>
      </div>
    </div>
</div>
</div>
</div>



