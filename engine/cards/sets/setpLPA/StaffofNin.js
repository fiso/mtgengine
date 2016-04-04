"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StaffofNinBase = require("../setC15/StaffofNin.js");

class StaffofNin extends StaffofNinBase {
  constructor(game) {
    super(game, "Staff of Nin", "Launch Parties", "pLPA");
  }
}

module.exports = StaffofNin;
