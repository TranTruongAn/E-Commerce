namespace TMDT.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class initialDB2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Books", "InStock", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "NameRec", c => c.String());
            AddColumn("dbo.Orders", "AddressOrder", c => c.String(nullable: false));
            AddColumn("dbo.Orders", "PhoneOrder", c => c.String(nullable: false));
            AddColumn("dbo.Orders", "Status", c => c.Int(nullable: false));
            AddColumn("dbo.Orders", "Payment", c => c.String());
            DropColumn("dbo.Orders", "SubTotal");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Orders", "SubTotal", c => c.Single());
            DropColumn("dbo.Orders", "Payment");
            DropColumn("dbo.Orders", "Status");
            DropColumn("dbo.Orders", "PhoneOrder");
            DropColumn("dbo.Orders", "AddressOrder");
            DropColumn("dbo.Orders", "NameRec");
            DropColumn("dbo.Books", "InStock");
        }
    }
}
