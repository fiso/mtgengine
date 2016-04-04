"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KarooBase = require("../setC14/Karoo.js");

class Karoo extends KarooBase {
  constructor(game) {
    super(game, "Karoo", "Visions", "VIS");
  }
}

module.exports = Karoo;
