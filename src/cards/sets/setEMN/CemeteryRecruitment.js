"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CemeteryRecruitment extends UnimplementedCard {
  constructor (game) {
    super(game, "Cemetery Recruitment", "Eldritch Moon", "EMN");
  }
}

module.exports = CemeteryRecruitment;
