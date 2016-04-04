"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AddleBase = require("../setINV/Addle.js");

class Addle extends AddleBase {
  constructor(game) {
    super(game, "Addle", "Vintage Masters", "VMA");
  }
}

module.exports = Addle;
