"use strict";
const Constants = require ("../../../Constants");
const PoreOverthePagesBase = require("../setDDQ/PoreOverthePages");

class PoreOverthePages extends PoreOverthePagesBase {
  constructor (game) {
    super(game, "Pore Over the Pages", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PoreOverthePages;
