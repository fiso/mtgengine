"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EverflowingChaliceBase = require("../setARC/EverflowingChalice.js");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor(game) {
    super(game, "Everflowing Chalice", "Commander 2014", "C14");
  }
}

module.exports = EverflowingChalice;
