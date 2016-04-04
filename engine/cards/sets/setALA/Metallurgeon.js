"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MetallurgeonBase = require("../setARC/Metallurgeon.js");

class Metallurgeon extends MetallurgeonBase {
  constructor(game) {
    super(game, "Metallurgeon", "Shards of Alara", "ALA");
  }
}

module.exports = Metallurgeon;
