"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket.js");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Vintage Masters", "VMA");
  }
}

module.exports = TranquilThicket;
