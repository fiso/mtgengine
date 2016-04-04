"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianRagerBase = require("../setAPC/PhyrexianRager.js");

class PhyrexianRager extends PhyrexianRagerBase {
  constructor(game) {
    super(game, "Phyrexian Rager", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRager;
