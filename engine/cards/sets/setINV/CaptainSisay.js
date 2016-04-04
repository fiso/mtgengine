"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CaptainSisayBase = require("../setV11/CaptainSisay.js");

class CaptainSisay extends CaptainSisayBase {
  constructor(game) {
    super(game, "Captain Sisay", "Invasion", "INV");
  }
}

module.exports = CaptainSisay;
