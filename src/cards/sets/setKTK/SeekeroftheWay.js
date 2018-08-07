"use strict";
const Constants = require ("../../../Constants");
const SeekeroftheWayBase = require("../setIMA/SeekeroftheWay");

class SeekeroftheWay extends SeekeroftheWayBase {
  constructor (game) {
    super(game, "Seeker of the Way", "Khans of Tarkir", "KTK");
  }
}

module.exports = SeekeroftheWay;
