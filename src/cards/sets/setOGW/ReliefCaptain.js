"use strict";
const Constants = require ("../../../Constants");
const ReliefCaptainBase = require("../setE01/ReliefCaptain");

class ReliefCaptain extends ReliefCaptainBase {
  constructor (game) {
    super(game, "Relief Captain", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ReliefCaptain;
