"use strict";
const Constants = require ("../../../Constants");
const ReturnedCentaurBase = require("../setORI/ReturnedCentaur");

class ReturnedCentaur extends ReturnedCentaurBase {
  constructor (game) {
    super(game, "Returned Centaur", "Theros", "THS");
  }
}

module.exports = ReturnedCentaur;
