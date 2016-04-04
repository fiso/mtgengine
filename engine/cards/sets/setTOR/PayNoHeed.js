"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PayNoHeedBase = require("../setDDL/PayNoHeed.js");

class PayNoHeed extends PayNoHeedBase {
  constructor(game) {
    super(game, "Pay No Heed", "Torment", "TOR");
  }
}

module.exports = PayNoHeed;
