"use strict";
const Constants = require ("../../../Constants");
const RumblingBalothBase = require("../setMTGA/RumblingBaloth");

class RumblingBaloth extends RumblingBalothBase {
  constructor (game) {
    super(game, "Rumbling Baloth", "Magic 2014", "M14");
  }
}

module.exports = RumblingBaloth;
