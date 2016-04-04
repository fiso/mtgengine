"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CavesofKoilosBase = require("../setAPC/CavesofKoilos.js");

class CavesofKoilos extends CavesofKoilosBase {
  constructor(game) {
    super(game, "Caves of Koilos", "Tenth Edition", "10E");
  }
}

module.exports = CavesofKoilos;
