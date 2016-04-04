"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MerrowReejereyBase = require("../setpFNM/MerrowReejerey.js");

class MerrowReejerey extends MerrowReejereyBase {
  constructor(game) {
    super(game, "Merrow Reejerey", "Lorwyn", "LRW");
  }
}

module.exports = MerrowReejerey;
