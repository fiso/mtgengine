"use strict";
const Constants = require ("../../../Constants");
const CaptainSisayBase = require("../setV11/CaptainSisay");

class CaptainSisay extends CaptainSisayBase {
  constructor(game) {
    super(game, "Captain Sisay", "Invasion", "INV");
  }
}

module.exports = CaptainSisay;
