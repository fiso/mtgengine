"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NantukoHuskBase = require("../setORI/NantukoHusk.js");

class NantukoHusk extends NantukoHuskBase {
  constructor(game) {
    super(game, "Nantuko Husk", "Tenth Edition", "10E");
  }
}

module.exports = NantukoHusk;
