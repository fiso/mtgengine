"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LuminesceBase = require("../setCSP/Luminesce.js");

class Luminesce extends LuminesceBase {
  constructor(game) {
    super(game, "Luminesce", "Tenth Edition", "10E");
  }
}

module.exports = Luminesce;
