"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const XathridDemonBase = require("../setC14/XathridDemon.js");

class XathridDemon extends XathridDemonBase {
  constructor(game) {
    super(game, "Xathrid Demon", "Magic 2010", "M10");
  }
}

module.exports = XathridDemon;
