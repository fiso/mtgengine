"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianDenouncerBase = require("../setDDE/PhyrexianDenouncer.js");

class PhyrexianDenouncer extends PhyrexianDenouncerBase {
  constructor(game) {
    super(game, "Phyrexian Denouncer", "Urza's Legacy", "ULG");
  }
}

module.exports = PhyrexianDenouncer;
