"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AqueousForm extends Card {
  constructor(game) {
    super(game, "Aqueous Form", "Theros", "THS");
  }
}

module.exports = AqueousForm;
