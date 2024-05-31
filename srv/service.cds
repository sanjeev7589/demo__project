using { demo__project as my } from '../db/schema.cds';

@path: '/service/demo__project'
@requires: 'authenticated-user'
service demo__projectSrv {
  @odata.draft.enabled
  entity Customers as projection on my.Customers;
  @odata.draft.enabled
  entity Products as projection on my.Products;
  @odata.draft.enabled
  entity Purchases as projection on my.Purchases;
  @odata.draft.enabled
  entity Redemptions as projection on my.Redemptions;
}