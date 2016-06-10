"use strict";
const Constants = require ("../../../Constants");
const LuminesceBase = require("../setCSP/Luminesce");

class Luminesce extends LuminesceBase {
  constructor (game) {
    super(game, "Luminesce", "Tenth Edition", "10E");
  }
}

module.exports = Luminesce;
