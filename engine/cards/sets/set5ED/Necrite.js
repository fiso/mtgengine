"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecriteBase = require("../setFEM/Necrite.js");

class Necrite extends NecriteBase {
  constructor(game) {
    super(game, "Necrite", "Fifth Edition", "5ED");
  }
}

module.exports = Necrite;
