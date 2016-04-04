"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrosanWarchiefBase = require("../setC13/KrosanWarchief.js");

class KrosanWarchief extends KrosanWarchiefBase {
  constructor(game) {
    super(game, "Krosan Warchief", "Friday Night Magic", "pFNM");
  }
}

module.exports = KrosanWarchief;
