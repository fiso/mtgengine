"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WanderlustBase = require("../setCED/Wanderlust.js");

class Wanderlust extends WanderlustBase {
  constructor(game) {
    super(game, "Wanderlust", "Unlimited Edition", "2ED");
  }
}

module.exports = Wanderlust;
