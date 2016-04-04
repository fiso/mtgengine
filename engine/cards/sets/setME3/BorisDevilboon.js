"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorisDevilboonBase = require("../setLEG/BorisDevilboon.js");

class BorisDevilboon extends BorisDevilboonBase {
  constructor(game) {
    super(game, "Boris Devilboon", "Masters Edition III", "ME3");
  }
}

module.exports = BorisDevilboon;
