<div class="row ml-2 mr-2" id="data_area">

  <div class="col-lg-3">
    <div class="card shadow mt-1 bg-primary" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title text-white mt-2">เหตุการณ์ทั้งหมด</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:30px;"><span id="all_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow mt-1 bg-success" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title text-white mt-2">จ่ายไฟแล้ว</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:30px;"><span id="finnish_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow mt-1 bg-warning" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title text-white mt-2">กำลังดำเนินการ</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:30px;"><span id="inprocess_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col-lg-3">
    <div class="card shadow mt-1 bg-danger" >
      <div class="card-body">
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title text-white mt-2">รอดำเนินการ</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
          <h5 class="card-title float-right text-white mt-2" style="font-size:30px;"><span id="pending_event">0</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>

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



