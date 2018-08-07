"use strict";
const Constants = require ("../../../Constants");
const MerrowReejereyBase = require("../setDDT/MerrowReejerey");

class MerrowReejerey extends MerrowReejereyBase {
  constructor (game) {
    super(game, "Merrow Reejerey", "Magic Online Promos", "PRM");
  }
}

module.exports = MerrowReejerey;
