"use strict";
const Constants = require ("../../../Constants");
const PhyrexianDenouncerBase = require("../setDDE/PhyrexianDenouncer");

class PhyrexianDenouncer extends PhyrexianDenouncerBase {
  constructor (game) {
    super(game, "Phyrexian Denouncer", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDenouncer;
