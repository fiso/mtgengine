"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TriskelionBase = require("../setATQ/Triskelion.js");

class Triskelion extends TriskelionBase {
  constructor(game) {
    super(game, "Triskelion", "Fourth Edition", "4ED");
  }
}

module.exports = Triskelion;
