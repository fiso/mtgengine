"use strict";
const Constants = require ("../../../Constants");
const WindreaverBase = require("../setDDI/Windreaver");

class Windreaver extends WindreaverBase {
  constructor (game) {
    super(game, "Windreaver", "Dissension", "DIS");
  }
}

module.exports = Windreaver;
