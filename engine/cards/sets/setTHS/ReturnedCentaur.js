"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReturnedCentaurBase = require("../setORI/ReturnedCentaur.js");

class ReturnedCentaur extends ReturnedCentaurBase {
  constructor(game) {
    super(game, "Returned Centaur", "Theros", "THS");
  }
}

module.exports = ReturnedCentaur;
